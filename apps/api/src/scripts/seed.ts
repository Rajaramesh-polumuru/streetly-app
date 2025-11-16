#!/usr/bin/env node
/**
 * Database seed script
 * Creates test users for development
 */

import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

import { User } from '../modules/users/users.model.js';

import { env } from '@/config/env.js';

const TEST_USERS = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'Admin123!',
    role: 'admin' as const,
  },
  {
    name: 'Test User',
    email: 'user@example.com',
    password: 'User123!',
    role: 'user' as const,
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: 'John123!',
    role: 'user' as const,
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'Jane123!',
    role: 'user' as const,
  },
];

async function seed() {
  try {
    console.log('🌱 Starting database seed...\n');

    // Connect to MongoDB
    await mongoose.connect(env.MONGODB_URI);
    console.log('✓ Connected to MongoDB\n');

    // Clear existing users (optional - comment out if you want to keep existing data)
    const existingCount = await User.countDocuments();
    if (existingCount > 0) {
      console.log(`⚠️  Found ${existingCount} existing users`);
      console.log('   Skipping seed to preserve existing data');
      console.log('   To force seed, manually delete users from database\n');
      await mongoose.disconnect();
      return;
    }

    // Create test users
    console.log('Creating test users...');
    for (const userData of TEST_USERS) {
      const hashedPassword = await bcrypt.hash(userData.password, 10);

      const user = await User.create({
        ...userData,
        password: hashedPassword,
      });

      console.log(`✓ Created ${user.role} - ${user.name} (${user.email})`);
    }

    console.log('\n🎉 Database seeded successfully!\n');
    console.log('Test User Credentials:');
    console.log('─'.repeat(50));
    TEST_USERS.forEach((user) => {
      console.log(`\n${user.name} (${user.role}):`);
      console.log(`  Email:    ${user.email}`);
      console.log(`  Password: ${user.password}`);
    });
    console.log('\n' + '─'.repeat(50));

    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log('\n✓ Disconnected from MongoDB');

    process.exit(0);
  } catch (error) {
    console.error('❌ Seed error:', error);
    await mongoose.disconnect();
    process.exit(1);
  }
}

seed();
