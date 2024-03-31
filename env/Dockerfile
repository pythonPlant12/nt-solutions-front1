# Step 1: Build the project
FROM --platform=arm64 node:18 as build-stage
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

RUN npm run build
CMD [ "npm", "run", "start" ]
# ------------------------------------------
# FROM --platform=arm64 node:18 as build-stage
# WORKDIR /app
# COPY package*.json ./
# RUN npm install -g npm@10.5.0
# # RUN npm install -g nuxt
# RUN npm install
# COPY . .
# RUN npm run build

# # Step 2: Set up the production environment
# FROM --platform=arm64 node:18 as production-stage
# WORKDIR /app
# COPY --from=build-stage /app/.nuxt ./.nuxt 
# COPY --from=build-stage /app/nuxt.config.ts ./nuxt.config.ts
# COPY --from=build-stage /app/package*.json ./
# RUN npm install --production
# EXPOSE 3000
# CMD ["npm", "start"]
# ----------------------------------------------
# # Step 1: Build the project
# FROM --platform=arm64 node:18 as build-stage
# WORKDIR /app
# COPY package*.json ./
# RUN npm install -g npm@10.5.0
# RUN npm install -g nuxt
# RUN npm install
# COPY . .
# RUN npm run build
# # Removed npm run start and npm run generate as they are not needed for the build process

# # Step 2: Set up the production environment
# FROM --platform=arm64 node:18 as production-stage
# WORKDIR /app
# COPY --from=build-stage /app/.output ./.output 
# COPY --from=build-stage /app/.nuxt ./.nuxt 
# COPY --from=build-stage /app/public ./public 
# COPY --from=build-stage /app/nuxt.config.ts ./
# COPY --from=build-stage /app/package*.json ./
# RUN npm install
# # Updated to use --omit=dev instead of installing all npm packages
# CMD ["npm", "start"]