from django.shortcuts import render
from django.http import JsonResponse
from .jobs_scrapper import scrape_jobs, cotiviti
from django.views import View
import json

# Create your views here.

class JobView(View):
    def get(self,request):
        position='python'
        records=scrape_jobs(position)
        data=json.dumps(records)
        # return JsonResponse(data, safe=False)
        return JsonResponse(records, safe=False)
    
class Cotiviti(View):
    def get(self, request):
        records=cotiviti('https://www.cotiviti.com.np/jobs')
        return JsonResponse(records, safe=False)