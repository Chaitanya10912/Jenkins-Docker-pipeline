pipeline {
  agent any

  environment {
    REGISTRY = "docker.io"
    IMAGE_NAME = "${REGISTRY}/${DOCKER_USER}/jenkins-docker-demo"
    TAG = "build-${BUILD_NUMBER}"
  }

  stages {
    stage('Clone') {
      steps {
        git url: 'https://github.com/YOUR_USERNAME/jenkins-docker-demo.git', branch: 'main'
      }
    }

    stage('Build Docker Image') {
      steps {
        script {
          docker.build("${IMAGE_NAME}:${TAG}")
        }
      }
    }

    stage('Login to Docker') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
          sh "echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin"
        }
      }
    }

    stage('Push Image') {
      steps {
        sh "docker push ${IMAGE_NAME}:${TAG}"
      }
    }
  }
}