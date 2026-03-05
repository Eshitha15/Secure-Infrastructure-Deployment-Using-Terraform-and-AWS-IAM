resource "aws_instance" "Capstone_ec2" {
  ami           = "ami-0f5ee92e2d63afc18"
  instance_type = "t3.micro"

  key_name = "github-ec2-key"

  iam_instance_profile = "EC2-Terraform-Role"
  vpc_security_group_ids = [aws_security_group.capstone_sg.id]

  tags = {
    Name = "Capstone-EC2"
  }
}
