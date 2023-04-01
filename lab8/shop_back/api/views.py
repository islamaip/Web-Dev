from django.http import HttpResponse
from api.models import Product, Category
from django.http.response import JsonResponse


def home(request):
    return HttpResponse('home page')

def product_list(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)

def category_list(request):
    categories = Category.objects.all()
    categories_json = [c.to_json() for c in categories]
    return JsonResponse(categories_json, safe=False)

def product_detail(request, product_id):
    products = Product.objects.all().filter(id=product_id)
    product = [p.to_json() for p in products]
    return  JsonResponse(product,safe=False)

def category_detail(request, category_id):
    categories = Category.objects.all().filter(id=category_id)
    categories_json = [c.to_json() for c in categories]
    return JsonResponse(categories_json, safe=False)

def products_category(request,category_id):
    category = Category.objects.get(id=category_id)
    products = Product.objects.all().filter(category=category.name)
    product = [p.to_json() for p in products]
    return JsonResponse(product, safe=False)