import { updateUserRoles } from '../src/lib/profile';

const TARGET_UID = 'Unhx6NfZlVcCIAZLH3QSwrJCHcv2';

async function main() {
  try {
    await updateUserRoles(TARGET_UID, {
      isAdmin: true,
      isPro: true,
      role: 'admin'
    });
    console.log('Successfully updated user roles');
  } catch (error) {
    console.error('Error updating user roles:', error);
    process.exit(1);
  }
}

main(); 