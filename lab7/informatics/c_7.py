num = int(input())

for i in range(1,num+1):
    if(num % i == 0 and i != 1):
        print(i)
        break