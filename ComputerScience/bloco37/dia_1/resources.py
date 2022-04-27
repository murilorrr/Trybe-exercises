import subprocess

print(subprocess.check_output(
    ["echo Hello World!"], shell=True).strip())
print(subprocess.check_output(["lscpu"], shell=True))
