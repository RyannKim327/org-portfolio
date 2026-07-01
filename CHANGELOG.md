# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2026-07-01

### Added
- Comprehensive environment setup instructions in `README.md` covering Supabase configurations, database schemas, and GitHub OAuth instructions.
- This `CHANGELOG.md` file for systematic version and release tracking.

### Changed
- Bumped project version to `0.2.0` in `package.json`.

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
