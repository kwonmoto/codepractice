import sys

sys.stdin = open("1000/example.txt", "r")
input = sys.stdin.readline().split(' ')

print(int(input[0]) + int(input[1]))
