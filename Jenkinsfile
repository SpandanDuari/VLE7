pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/SpandanDuari/VLE7.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t vle7-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker stop vle7-container || true
                docker rm vle7-container || true
                docker run -d -p 8005:3000 --name vle7-container vle7-app
                '''
            }
        }
    }
}