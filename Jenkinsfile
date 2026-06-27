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

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE .'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker stop $CONTAINER || true
                docker rm $CONTAINER || true

                docker run -d \
                    --name $CONTAINER \
                    -p 80:3000 \
                    $IMAGE
                '''
            }
        }

    }
}
