-- Create feedback table in Supabase
-- Run this SQL in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS feedback (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert feedback (public can submit feedback)
CREATE POLICY "Allow public to insert feedback"
  ON feedback
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create a policy that allows authenticated users to view feedback (optional - for admin access)
CREATE POLICY "Allow authenticated users to view feedback"
  ON feedback
  FOR SELECT
  TO authenticated
  USING (true);

-- Optional: Create an index on created_at for faster queries
CREATE INDEX IF NOT EXISTS idx_feedback_created_at ON feedback(created_at DESC);

