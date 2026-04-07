# 🐳 Node.js Application (Docker)

This directory contains a simple Node.js application containerized using Docker.

---

## 📌 Overview

- Lightweight Node.js app
- Dockerized using Alpine image
- Runs on port `3000`
- Uses non-root user for security

---

## 📂 Files
.
├── Dockerfile
├── index.js
└── package.json

# ☸️ Kubernetes Deployment - Simple Time Service using manifest.yaml

This file defines the Kubernetes resources required to deploy the **Simple Time Service** application.

It includes:
- Deployment (application pods)
- Service (internal cluster communication)

---

## 📌 Overview

- Application runs inside Kubernetes pods
- 2 replicas for high availability
- Resource limits defined for efficient usage
- Internal service exposure using `ClusterIP`

---

##  Resources Defined

### 🔹 Deployment

- Creates and manages application pods
- Ensures desired number of replicas are always running

### 🔹 Service

- Exposes the application internally within the cluster
- Uses `ClusterIP` (not publicly accessible)

---

## 🚀 Deployment Details

### 🔹 Application Name

🔹 Container Configuration

| Property        | Value |
|----------------|------|
| Image          | https://hub.docker.com/repository/docker/maheshjonnalagadda/simpletestservice/general |
| Port           | 3000 |
| Container Name | simpletimeservice |