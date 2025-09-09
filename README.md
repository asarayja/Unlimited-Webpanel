
# 🎛️ Unlimited Webpanel Reforge — User Overview

This is a short, user-facing overview of what Unlimited Webpanel provides and the system requirements for running it. The project is normally distributed pre-built; this README focuses on features and operational requirements rather than build steps.

What is Unlimited?
- A web-based admin panel for FiveM servers built around QBX conventions. It gives server administrators and staff a central UI to manage players, jobs, inventories and internal staff workflows.

Key features (for users and admins)
- 🎯 Dashboard
	- Overview of online players, system status and quick actions (kick/ban shortcuts).
- 🧾 Player management
	- Search players, view details, kick, ban and inspect metadata.
	- View player inventories (requires OX Inventory integration).
- � Garage system
	- Compatible with QBX Garage and JG-AdvancedGarage integrations for vehicle storage, retrieval and garage management.
- 🗺️ LiveMap
	- Real-time player map showing player locations and configurable blips. Useful for tracking online players and quick navigation.
- 📋 Staff workflows
	- TODO lists for tasks with assignment and comments.
	- Meeting Minutes with date, participants, content and status (save/publish/archive).
	- Role-based delegation and assignment rules (who can assign to whom depends on roles).
- 🛒 Shops & Stashes (OX Inventory required)
	- In-game shops and stash/locker functionality that integrates with OX Inventory for item handling.
- 📝 Player Reports
	- Submit and review player reports with attachments and staff follow-up.
- 👥 Job & Gang management
	- Tools for managing jobs and gangs: member lists, permissions, and job-related settings.
- 🔐 Roles & permissions
	- Granular access control (read/create/update/delete) driven by user roles.
- 🌐 Multilingual UI
	- Multiple language support (e.g. English, Norwegian, German, Polish) — strings live in `locales`.

System requirements (runtime)
- MySQL database (requires either `oxmysql` or `mysql-async` in the FiveM server environment) ✅
- OX Inventory (required to use inventory-related features such as player inventory, shops and stashes) ✅

Notes
for bugs or having idean for a new feature or a support for a new garage send me a message on Discord and with name Unlimited Webpanel Reforge and the bugs or feature idea
It only Support qbx(qbox) for now but i have a plane to update it to support qbcore again in the future
