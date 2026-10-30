# Factory Inventory SaaS

A multi-tenant factory inventory management application designed to manage inventory operations through a secure, modular, and maintainable software architecture.

## Project Status

**Development status:** Foundation setup

The project is being developed incrementally. Business rules that require client clarification remain pending and will not be implemented based on assumptions.

## Technology Stack

### Frontend
- React
- TypeScript

### Backend
- Python 3.12
- FastAPI

### Database
- PostgreSQL
- SQLAlchemy
- Alembic

### Development and Infrastructure
- Docker
- Docker Compose
- Git
- GitHub

## Architecture

The application follows a modular monolith architecture.

The frontend and backend are maintained within a single application repository.

## Repository Structure

The application structure will be established incrementally as development progresses.

## Development Principles

- Preserve approved business requirements.
- Keep unresolved client-dependent decisions open.
- Use environment variables for sensitive configuration.
- Maintain database schema changes through Alembic migrations.
- Test features before marking them complete.
- Use meaningful Git commits.

## Security

- Never commit passwords, API keys, or access tokens.
- Keep environment-specific configuration in local environment files.
- Use `.env.example` to document required configuration without exposing secrets.

## Project Documentation

The original project specification, approved architecture proposal, and requirements registers are maintained separately from this application repository.

## License

Proprietary. All rights reserved.

This project is not currently licensed for public redistribution or reuse.
