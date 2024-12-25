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
        stage('Test') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    npm run test
                '''
            }
        }
    }

    post {
        always {
            junit 'test-results/'
        }
    }
}
