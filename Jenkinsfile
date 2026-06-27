pipeline {

    agent any

    environment {
        IMAGE = "mywebsite"
        CONTAINER = "website"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
          steps {
            sh 'docker compose build'
          }
       }

    }
}
