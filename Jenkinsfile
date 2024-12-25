pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World!!! Jenkins setting up'
            }
        }
        stage('Build') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    node --version
                    npm --version
                    pwd
                    npm ci
                    npm run build
                '''
            }
        }
    }
}
