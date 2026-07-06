# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 07-01-26 - 07-05-26

### Added
- Comprehensive environment setup instructions in `README.md` covering Supabase configurations, database schemas, and GitHub OAuth instructions.
- This `CHANGELOG.md` file for systematic version and release tracking.
- `Admin` Panel for dynamic announcement.
- `Events Page` for dynamic control in posting announcements and happenings.
- `Events Discussion page` for inquiries and further announcements related to each event.
- Custom ui/widget `input` and `textarea` for forms.
- Custom active panel indicator.
- Admin sidebar navigation with header and user logged in role and username.
- `User Infomation Management` for members and outside collaborator.

### Changed
- Bumped project version to `0.2.0` in `package.json`.
- `start` to `page` api `GET` method parameter for pagination.
- Updated User Profile form in `src/app/admin/page.tsx` with proper primary action button and reset handler.

### Fixed 
- Aligned Mermaid ERD with SQL schemas in `README.md`.
- Corrected duplicated `public.events` SQL schema under `categories` Table in `README.md`.

---

## [0.1.0] - 2026-06-30

### Added
- **Aesthetic Developer UI**: Interactive landing page with sections for Hero (premium dark mode console aesthetic), Mission statement, Tracks/Specializations, testimonials carousel, FAQ accordion, and Connect form.
- **Dynamic Animations**: Seamless transitions and particle effects powered by Framer Motion 12 and custom interactive Tailwind classes.
- **Supabase Core Integration**: Integrated `@supabase/ssr` and `@supabase/supabase-js` for browser-side and server-side authentication and database connections.
- **GitHub Authentication Callback**: Configured automated Auth callback route (`/auth/callback`) to handle OAuth session exchange and persist incoming GitHub users inside the custom `users` database table.
- **Database-Backed API Endpoints**:
  - `/api/testimonials` - Fetch client/member recommendations with roles
  - `/api/users` - Retrieve registered users and roles
  - `/api/users/login` / `/api/users/register` - Preliminary authentication handlers
  - `/api/users/roles` - Retrieve corresponding roles
  - `/api/events` - Preliminary community events setup
  - `/api/projects` - Preliminary project listings setup
- **Admin Control Panel**: Developed a foundational `/admin` view with modular hero component, locked behind a GitHub OAuth trigger.
- **Test Suite Integration**: Setup unit testing directory under `src/test/index.ts` utilizing `tsx`.
