def xor(x, y):
    if(x == '1' and y == '0' or x == '0' and y == '1'):
        return True
    return False
    
x, y = input().split()

if(xor(x,y)):
    print(1)
else:
    print(0)