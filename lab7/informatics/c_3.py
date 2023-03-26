begin = int(input())
end = int(input())

for i in range(begin,end+1):
    if(i**0.5 == int(i ** 0.5)):
        print(i,end=' ')
