size = int(input())

numbers = list(map(int,input().split()))

for i in range(0, size - 1):
    if((numbers[i] > 0 and numbers[i+1] > 0) or (numbers[i] < 0 and numbers[i+1] <0)):
        print("YES")
        exit()

print("NO")