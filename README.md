# Multi-Container Application with Docker Compose & Kubernetes

## Project Overview
This project is a multi-container application built with Docker and deployed on a Kubernetes cluster using Minikube. The application includes:
- **Frontend**: React-based user interface
- **Backend**: Node.js backend API
- **Database**: MongoDB for persistent data storage

## Architecture
- **Frontend** communicates with the **Backend** through HTTP.
- **Backend** connects to a **MongoDB** database to store and retrieve data.
- The services are defined using **Docker Compose** for local development and **Kubernetes** for deployment on Minikube.

## Technologies Used
- **Docker**: Containerization of services
- **Docker Compose**: Orchestrating multiple containers
- **Minikube**: Local Kubernetes cluster
- **Kubernetes**: Deploying and managing containers in clusters
- **MongoDB**: NoSQL Database

## Setup Instructions

### Prerequisites
- Docker
- Docker Compose
- Minikube
- kubectl

### Running the Application with Docker Compose
1. Clone the repositories:
   ```bash
   git clone https://github.com/nileshlip/Techdome-frontend.git
   git clone https://github.com/nileshlip/Techdome-backend.git
