import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
    testDir: './tests/specs',
    timeout: 30000,

    fullyParallel: true,

    forbidOnly: !!process.env.CI,

    retries: process.env.CI ? 2 : 0,

    workers: process.env.CI ? 1 : undefined,

    reporter: [
        ['list'],
        ['html']
    ],

    use: {
        baseURL: 'https://www.saucedemo.com',

        headless: true,

        trace: 'on-first-retry',

        screenshot: 'only-on-failure',

        video: 'retain-on-failure'
    },

    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome']
            }
        },

        {
            name: 'firefox',
            use: {
                ...devices['Desktop Firefox']
            }
        }
    ]
});