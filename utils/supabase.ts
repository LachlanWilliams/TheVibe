import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

export interface Product {
  name: string;
  link: string;
  price: number;
}

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// Function to retrieve data from the 'products' table
export async function fetchProducts(): Promise<Product[]> {
  try {
    const { data, error } = await supabase.from('Products').select();

    if (error) {
      throw error;
    }

    return data ?? [];
  } catch (error) {
    let errorMessage = 'Failed to do something exceptional';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.log(errorMessage);
    return [];
  }
}

export async function findUser(email: string) {
  try {
    const { data, error } = await supabase.from('Users').select().eq('email', email);
    if (error) {
      throw error;
    }
    console.log('findUser: ', data);
    return data.length > 0;
  } catch (error) {
    console.error('Error checking user existence:', error);
    return false;
  }
}

export async function resetPassword(email: string) {
  try {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) {
      throw error;
    }
    console.log('resetPassword data: ', data);
    return true;
  } catch (error) {
    console.log('resetPassword error: ', error);
    return false;
  }
}

// Example usage
fetchProducts().then((products) => {
  console.log('Products:');
  products.forEach((product) => {
    console.log(`Name: ${product.name}, Link: ${product.link}, Price: ${product.price}`);
  });
});
