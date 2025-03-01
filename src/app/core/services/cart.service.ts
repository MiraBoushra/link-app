import { Injectable, signal, computed } from '@angular/core';
import { CourseModel } from 'src/app/features/models/landingModels';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly CART_KEY = 'cartItems';

  // Signal to store cart items
  private cartItems = signal<CourseModel[]>(this.loadCartFromStorage());

  constructor() {}

  // Load cart items from local storage
  private loadCartFromStorage(): CourseModel[] {
    try {
      return JSON.parse(localStorage.getItem(this.CART_KEY) || '[]');
    } catch (error) {
      console.error('Error parsing cart data:', error);
      return [];
    }
  }

  // Save cart items to local storage
  private saveCartToStorage(cartItems: CourseModel[]) {
    localStorage.setItem(this.CART_KEY, JSON.stringify(cartItems));
  }

  // Computed property for cart count
  cartCount = computed(() => this.cartItems().length);

  // Computed property to get cart items
  cartCoursesInfo = computed(() => this.cartItems());

  // Add item to cart (immutable update)
  addToCart(course: CourseModel) {
    this.cartItems.update(items => {
      const updatedCart = [...items, course];
      this.saveCartToStorage(updatedCart);
      return updatedCart;
    });
  }

  // Remove item from cart
  removeFromCart(courseId: string |undefined) {
    this.cartItems.update(items => {
      const updatedCart = items.filter(course => course.id !== courseId);
      this.saveCartToStorage(updatedCart);
      return updatedCart;
    });
  }

  // Clear entire cart
  clearCart() {
    this.cartItems.set([]);
    localStorage.removeItem(this.CART_KEY);
  }
}
