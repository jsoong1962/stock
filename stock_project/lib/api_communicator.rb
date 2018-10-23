require 'rest-client'
require 'JSON'
require 'pry'
require_relative '../config/environment.rb'

def get_stocks_from_api()
  #make the web request
  response_string = RestClient.get('https://api.iextrading.com/1.0/stock/market/crypto')
  response_hash = JSON.parse(response_string)
  response_hash.each do |stock|
      newStock = Stock.new()
      newStock.price = stock["open"]
      newStock.symbol = stock["symbol"]
      newStock.name = stock["companyName"]
      newStock.category = stock["sector"]
      newStock.volume = stock["latestVolume"]
      newStock.save
  end
end
#
# def stockData = get_stocks_from_api()
# stockGetter(stockData)
