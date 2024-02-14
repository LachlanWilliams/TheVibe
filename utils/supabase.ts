import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

export interface Product {
  name: string;
  link: string;
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

// Example usage
fetchProducts().then((products) => {
  console.log('Products:');
  products.forEach((product) => {
    console.log(`Name: ${product.name}, Link: ${product.link}`);
  });
});
