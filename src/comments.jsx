// src/services/comments.js
import { supabase } from './supabase';

export const getComments = async () => {
  const { data, error } = await supabase
    .from('comments')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(6);

  if (error) {
    console.error('Error fetching comments:', error);
    return [];
  }

  return data;
};

export const addComment = async (comment) => {
  const { data, error } = await supabase
    .from('comments')
    .insert([comment])
    .select()
    .single();

  if (error) {
    console.error('Error adding comment:', error);
    return null;
  }

  return data;
};