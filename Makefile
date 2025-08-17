.PHONY: help dev build deploy clean setup audit

help:
	@echo "Available commands:"
	@echo "  make setup    - Initial project setup"
	@echo "  make dev      - Start development server"
	@echo "  make build    - Build for production"
	@echo "  make deploy   - Deploy to Vercel"
	@echo "  make audit    - Run all audits"
	@echo "  make clean    - Clean and reinstall"

setup:
	npm install
	npx husky install
	claude doctor
	@echo "✅ Setup complete!"

dev:
	npm run dev

build:
	npm run type-check
	npm run lint
	npm run build

deploy:
	npm run build
	vercel --prod

audit:
	npm run type-check
	npm run lint
	npm run lighthouse
	claude -p "Run accessibility audit"

clean:
	npm run clean
