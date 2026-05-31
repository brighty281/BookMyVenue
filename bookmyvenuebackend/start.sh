#!/usr/bin/env bash
set -euo pipefail

# Load environment variables from .env if present
if [ -f ".env" ]; then
  # Export variables defined in .env to the environment
  set -a
  # shellcheck disable=SC1091
  . .env
  set +a
fi

# Run Spring Boot via the Maven wrapper
exec ./mvnw spring-boot:run
