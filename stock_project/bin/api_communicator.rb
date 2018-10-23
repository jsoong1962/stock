require 'rest-client'
require 'JSON'
require 'pry'
require_relative "../config/environments/development.rb"


def get_stocks_from_api()
  binding.pry
  #make the web request
  response_string = RestClient.get('https://api.iextrading.com/1.0/stock/market/crypto')
  response_hash = JSON.parse(response_string)
 binding.pry

  response_hash.each do |stock|
    newStock = Stock.new()
      newStock.price = stock["open"]
      newStock.symbol = stock["symbol"]
      newStock.name = stock["companyName"]
      newStock.category = stock["sector"]
      binding.pry
  end
   # your code here
end

get_stocks_from_api()
