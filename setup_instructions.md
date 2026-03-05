# Setup Instructions

This document provides step-by-step instructions to set up and run the project **Secure Infrastructure Deployment Using Terraform and AWS IAM**.

---

# 1. Prerequisites

Before running the project, ensure the following tools are installed on your system:

• Terraform  
• AWS CLI  
• Git  
• GitHub account  
• AWS account  

Download Terraform from:  
https://developer.hashicorp.com/terraform/downloads

Download AWS CLI from:  
https://aws.amazon.com/cli/

---

# 2. Clone the Repository

Clone the project repository from GitHub.

```
git clone https://github.com/pranavchaitanya14/secure-aws-terraform-webapp.git
```

Navigate into the project directory.

```
cd secure-aws-terraform-webapp
```

---

# 3. Configure AWS Credentials

Configure AWS CLI using your AWS access credentials.

```
aws configure
```

Enter the following details when prompted:

AWS Access Key ID  
AWS Secret Access Key  
Default region name (example: ap-south-1)  
Output format: json

---

# 4. Initialize Terraform

Initialize Terraform to download necessary provider plugins.

```
terraform init
```

---

# 5. Validate Terraform Configuration

Validate the Terraform configuration files to check for syntax errors.

```
terraform validate
```

---

# 6. Deploy Infrastructure

Apply the Terraform configuration to create AWS resources.

```
terraform apply
```

Type **yes** when prompted.

This command will create the following AWS resources:

• EC2 Instance  
• Security Groups  
• Networking configuration  
• IAM role attachment  

---

# 7. Connect to EC2 Instance

After the infrastructure is created, connect to the EC2 instance using SSH.

```
ssh -i <your-key.pem> ubuntu@<EC2_PUBLIC_IP>
```

Replace `<your-key.pem>` with your downloaded key file and `<EC2_PUBLIC_IP>` with the instance public IP.

---

# 8. Install Apache Web Server

Install Apache web server on the EC2 instance.

```
sudo apt update
sudo apt install apache2 -y
```

Start the Apache service.

```
sudo systemctl start apache2
```

Enable Apache to start automatically.

```
sudo systemctl enable apache2
```

---

# 9. Deploy the Web Application

Copy the application files to the Apache web root directory.

```
sudo cp index.html /var/www/html/
sudo cp style.css /var/www/html/
sudo cp script.js /var/www/html/
```

Restart the Apache server.

```
sudo systemctl restart apache2
```

---

# 10. Access the Application

Open a web browser and enter the EC2 public IP address.

Example:

```
http://13.205.204.44
```

The deployed web application will appear in the browser.

---

# 11. CI/CD Pipeline Deployment

The project includes a CI/CD pipeline using **GitHub Actions**.

When new code is pushed to the GitHub repository:

• The GitHub Actions pipeline is triggered automatically  
• The pipeline connects securely to the EC2 instance using SSH  
• The updated application files are deployed automatically  

This ensures automated and continuous deployment of the application.

---

# 12. Destroy Infrastructure (Optional)

To remove the AWS resources created by Terraform, run:

```
terraform destroy
```

Type **yes** to confirm deletion.

This command deletes all infrastructure resources created by the Terraform configuration.

---

# Project Deployment Complete

The project successfully demonstrates secure infrastructure deployment using Terraform, AWS IAM, and CI/CD automation with GitHub Actions.
