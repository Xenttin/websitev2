/*
  # Create contacts table

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key)
      - `first_name` (text, required)
      - `last_name` (text, required)
      - `email` (text, required)
      - `budget` (text, required)
      - `problem` (text, required)
      - `created_at` (timestamp with time zone, default: now())

  2. Security
    - Enable RLS on `contacts` table
    - Add policy for inserting new contacts
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  budget text NOT NULL,
  problem text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert new contacts
CREATE POLICY "Anyone can insert contacts"
  ON contacts
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Only authenticated users can view contacts
CREATE POLICY "Only authenticated users can view contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (true);