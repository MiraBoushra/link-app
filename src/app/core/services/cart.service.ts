import { Injectable, signal, computed } from '@angular/core';
import { CourseModel } from 'src/app/features/models/landingModels';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly CART_KEY = 'cartItems';

  private cartItems = signal<CourseModel[]>(this.loadCartFromStorage());

  constructor() {}

  private loadCartFromStorage(): CourseModel[] {
    try {
      return JSON.parse(localStorage.getItem(this.CART_KEY) || '[]');
    } catch (error) {
      console.error('Error parsing cart data:', error);
      return [];
    }
  }

  private saveCartToStorage(cartItems: CourseModel[]) {
    localStorage.setItem(this.CART_KEY, JSON.stringify(cartItems));
  }

  cartCount = computed(() => this.cartItems().length);

  cartCoursesInfo = computed(() => this.cartItems());

  subtotal = computed(() => 
    this.cartItems().reduce((sum, course) => sum + (course.price ?? 0), 0)
  );  

  totalDiscount = computed(() =>
    this.cartItems().reduce((sum, course) => sum + (course.discount || 0), 0)
  );

  tax = computed(() => this.subtotal() * 0.10);

  totalPrice = computed(() => this.subtotal() - this.totalDiscount() + this.tax());

  addToCart(course: CourseModel) {
    this.cartItems.update(items => {
      const isAlreadyInCart = items.some(item => item.id === course.id);
      
      if (isAlreadyInCart) {
        return items; 
      }
  
      const updatedCart = [...items, course];
      this.saveCartToStorage(updatedCart);
      return updatedCart;
    });
  }

  removeFromCart(courseId: string | undefined) {
    this.cartItems.update(items => {
      const updatedCart = items.filter(course => course.id !== courseId);
      this.saveCartToStorage(updatedCart);
      return updatedCart;
    });
  }
}
