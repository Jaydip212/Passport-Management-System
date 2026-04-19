-- Update Schema for Police Role and Gateway features

-- 1. Alter profiles table to allow police role
ALTER TABLE profiles DROP CONSTRAINT IF EXISTS profiles_role_check;
ALTER TABLE profiles ADD CONSTRAINT profiles_role_check CHECK (role IN ('user', 'admin', 'police'));

-- 2. Add police remarks to applications
ALTER TABLE passport_applications ADD COLUMN IF NOT EXISTS police_remark TEXT;

-- 3. Add RLS Policies for Police Users
-- Police can view all applications to verify them
CREATE POLICY "Police can view applications" ON passport_applications FOR SELECT USING ((SELECT role FROM profiles WHERE id = auth.uid()) = 'police');
-- Police can update application status and add remarks
CREATE POLICY "Police can update applications" ON passport_applications FOR UPDATE USING ((SELECT role FROM profiles WHERE id = auth.uid()) = 'police');
-- Police can read user uploaded documents to verify identities
CREATE POLICY "Police can read all documents" ON documents FOR SELECT USING ((SELECT role FROM profiles WHERE id = auth.uid()) = 'police');
