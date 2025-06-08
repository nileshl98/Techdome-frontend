# Multi-Container Application Deployment on AWS with Docker Compose & Kubernetes 

## Project Overview

This project sets up a multi-container application with **Frontend**, **Backend**, and **Database** services. The goal is to use **Docker Compose** for local development and then deploy the same application on an **AWS EC2 Ubuntu instance** using **Minikube** for Kubernetes orchestration.

### Application Components:

- **Frontend**: A React-based user interface that interacts with the backend API.
- **Backend**: A Node.js API service that interacts with the MongoDB database.
- **Database**: A MongoDB container for persistent storage.

## Technologies Used

- **Docker**: For containerizing the services (Frontend, Backend, Database)
- **Docker Compose**: To manage multi-container applications in a local environment
- **Minikube**: For setting up a local Kubernetes cluster on an AWS EC2 Ubuntu instance
- **Kubernetes**: For orchestrating the containers in a cluster environment
- **MongoDB**: A NoSQL database used by the backend service

## Prerequisites

Ensure the following tools are installed on your AWS EC2 Ubuntu instance:

- **Docker**: [Install Docker](https://docs.docker.com/engine/install/ubuntu/)
- **Docker Compose**: [Install Docker Compose](https://docs.docker.com/compose/install/)
- **Minikube**: [Install Minikube](https://minikube.sigs.k8s.io/docs/)
- **kubectl**: [Install kubectl](https://kubernetes.io/docs/tasks/tools/)

You also need to have an **AWS EC2 instance running Ubuntu**.

## Setup Instructions

### Step 1: Launch an AWS EC2 Instance with Ubuntu

1. Create an EC2 instance with **Ubuntu** as the operating system (e.g., Ubuntu 20.04).
2. Ensure the security group allows inbound traffic on **ports 22 (SSH), 3000 (Frontend), 5000 (Backend)**.
3. SSH into the instance using the key pair.

```bash
ssh -i your-key.pem ubuntu@your-ec2-ip
