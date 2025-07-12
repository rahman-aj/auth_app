# React Native Auth App

A fully functional authentication app built with **Expo**, **TypeScript**, **React Navigation**, and **Redux Toolkit**, featuring persistent login, token refresh, and reusable UI components.

---

## Getting Started

### 1. Clone the Repository

```bash
git clone git@github.com:rahman-aj/auth_app.git

Then clone the node server:
git clone git@github.com:rahman-aj/auth_app_server.git
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the App
```bash
npx expo start

Then start the server:
node index.js
```
Note: If you’re using a physical device, scan the QR code with the Expo Go app. For simulator use, ensure your environment is set up (Xcode or Android Studio).

### 4. Project Structure
```bash
src/
├── api/           # API clients (login, signup, refresh)
├── components/    # Reusable UI components (inputs, buttons, loader)
├── constants/     # Theme constants (colors, spacing, fonts)
├── context/       # AuthContext using React Context API
├── models/        # Type definitions (User)
├── navigation/    # React Navigation setup
├── screens/       # Login, Signup, Home screens
├── store/         # Redux store and loading state slice
├── styles/        # Centralized styles for screens
├── utils/         # Validators and helper functions
```

### 5. Features Implemented
- Authentication:
Login, Signup, Logout
Auth state managed via AuthContext
Token and session persistence via AsyncStorage

- Token Lifecycle:
Token expiration set to 24 hours
Automatic refresh if token is older than 12 hours
Clears session if expired

- Global State:
Redux Toolkit store for global loading state
Used to display a global full-screen loader

- Form Validation:
Centralized validation logic (validateEmail, validatePassword, validateName)
Reused across login and signup forms

- Reusable Components:
InputField
PasswordInput with show/hide toggle
AuthButton with loading spinner
Loader connected to Redux

- UI & UX
Centralized theme with spacing, color constants
Screen styles extracted to styles/screens.ts
Smooth keyboard handling with KeyboardAvoidingView

### 6. Dependencies Used
- Expo
- React Navigation
- Redux Toolkit
- AsyncStorage

### 7. Application Preview
<img width="2268" height="1640" alt="Screenshot 2025-07-12 at 10 07 32 PM-imageonline co-merged" src="https://github.com/user-attachments/assets/02a5d52d-fbb3-49b5-a0dc-5920d1af9169" />

