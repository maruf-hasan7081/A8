# Category A8 Requirement Checklist

## Key requirements

- [x] At least 10 meaningful Git commits included
- [x] README with project name, purpose, live URL placeholder, features, packages
- [x] Responsive mobile, tablet, desktop design
- [x] Environment variables for database/auth/OAuth secrets
- [x] Unique library-themed design
- [x] Vercel-ready Next.js application with route reload support

## Layout

- [x] Logo on left linking to Home
- [x] Home, All Books, My Profile navigation
- [x] Logged-out state shows Login
- [x] Logged-in state shows user name and Logout
- [x] Custom footer
- [x] Social media links
- [x] Contact Us section

## Data

- [x] 12 book objects
- [x] `id`
- [x] `title`
- [x] `author`
- [x] `description`
- [x] `category` limited to Story, Tech, Science
- [x] `available_quantity`
- [x] `image_url`

## Home

- [x] “Find Your Next Read” banner
- [x] Browse Now button to All Books
- [x] Scrolling New Arrivals / membership message
- [x] Top 4 featured books
- [x] View Details buttons
- [x] Extra section: category discovery
- [x] Extra section: Swiper testimonials
- [x] Extra section: borrowing steps

## Authentication

- [x] Login title and form
- [x] Email field
- [x] Password field
- [x] Login button
- [x] Success navigation to Home/callback route
- [x] Toast and form error handling
- [x] Registration link
- [x] Google social login
- [x] Registration title and form
- [x] Name field
- [x] Email field
- [x] Photo URL field
- [x] Password field
- [x] Register button
- [x] Successful registration redirects to Login
- [x] Login link from Register
- [x] No email verification
- [x] No forgot-password feature

## All Books

- [x] Large title search input
- [x] Book image and title
- [x] Details button
- [x] Functional category sidebar

## Single Book Details (Private)

- [x] Server session validation
- [x] Optimistic proxy redirect
- [x] Large cover left, details right on desktop
- [x] Title
- [x] Author
- [x] Description
- [x] Available quantity
- [x] Borrow This Book button
- [x] Confirmation toast

## My Profile (Private)

- [x] Private route
- [x] Shows available user information
- [x] Update button
- [x] Separate update route
- [x] Name input
- [x] Image input
- [x] Update Information button
- [x] Better Auth `updateUser()` implementation

## Required package challenge

- [x] Swiper.js implemented
