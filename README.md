# Playwright_automation_framework
Playwright UI &amp; API automation framework (TypeScript)
## 🧪 Login Test Scenarios

This framework includes automated login test scenarios implemented using **Playwright** and the **Page Object Model (POM)** design pattern.

### ✅ Valid Login Scenario
**Objective:**  
Verify that a user with valid credentials can successfully log in to the application.

**Steps:**
1. Navigate to the Login page
2. Enter a valid username and password
3. Click the Login button
4. Verify user is redirected to the Dashboard page

**Expected Result:**  
User is successfully logged in and redirected to the dashboard.

---

### ❌ Invalid Login Scenario
**Objective:**  
Verify that the application handles invalid login attempts correctly.

**Steps:**
1. Navigate to the Login page
2. Enter an invalid username and/or password
3. Click the Login button
4. Verify an appropriate error message is displayed

**Expected Result:**  
Login fails and an error message is shown to the user without navigating away from the login page.

---

### 🏗 Design Approach
- **Page Object Model (POM)** is used to separate test logic from UI interactions
- Test data is externalized using JSON files
- Assertions are implemented at page level for better reusability
- Playwright’s auto-waiting mechanism is leveraged (no hard waits)

---

### ▶️ Running Login Tests
```bash
# Run all tests
npx playwright test

# Run login tests only
npx playwright test tests/ui/login.spec.ts
