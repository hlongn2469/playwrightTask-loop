const { test, expect } = require('@playwright/test');

const testCases = [
  {
    "id": 1,
    "name": "Test Case 1",
    "leftNav": "Cross-functional project plan, Project",
    "column": "To do",
    "card_title": "Draft project brief",
  },
  {
    "id": 2,
    "name": "Test Case 2",
    "leftNav": "Cross-functional project plan, Project",
    "column": "To do",
    "card_title": "Schedule kickoff meeting",
  },
  {
    "id": 3,
    "name": "Test Case 3",
    "leftNav": "Cross-functional project plan, Project",
    "column": "To do",
    "card_title": "Share timeline with teammates",
  },
  {
    "id": 4,
    "name": "Test Case 4",
    "leftNav": "Work Requests",
    "column": "New Requests",
    "card_title": "[Example] Laptop setup for new hire",
  },
  {
    "id": 5,
    "name": "Test Case 5",
    "leftNav": "Work Requests",
    "column": "In Progress",
    "card_title": "[Example] Password not working",
  },
  {
    "id": 6,
    "name": "Test Case 6",
    "leftNav": "Work Requests",
    "column": "Completed",
    "card_title": "[Example] New keycard for Daniela V",
  }
];

const email = 'ben+pose@workwithloop.com';
const password = 'Password123';

test.describe('Asana Data-Driven Tests', () => {
  testCases.forEach((data) => {
    test('', async ({ page }) => {
      await test.step('Login to Asana', async () => {
        // Login to Asana
        await page.goto('https://app.asana.com/-/login');
    
        // Input email and password
        await page.fill('input[name="loginEmail"]', email);
        await page.fill('input[name="loginPassword"]', password);
        
        // Submit the login form
        await page.click('button[type="submit"]');
        
        // Wait for login success confirmation
        await page.waitForNavigation();
        
        // Optional: Add assertion to verify successful login
        const url = page.url();
        expect(url).toContain('app.asana.com');
      });

      await test.step('Navigate to the project page', async () => {
        // Navigate to the project page
        // Implement navigation to the specified leftNav item
        await page.click(`text="${data.leftNav}"`);
      });

      await test.step('Verify the card is within the right column', async () => {
        // Verify the card is within the right column
        // Implement verification of card_title in the specified column
        const columnSelector = `text="${data.column}"`;
        await page.click(columnSelector); // Click on the column
        await page.waitForSelector(`text="${data.card_title}"`); // Verify card title presence
      });
      
    });
  });
});

