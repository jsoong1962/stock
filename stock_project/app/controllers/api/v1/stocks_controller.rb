class Api::V1::StocksController < ApplicationController
  before_action :find_stock, only: [:update]
  def index
    @stocks = Stock.all
    render json: @stocks
  end

  def update
    @stocks.update(stocks_params)
    if @stocks.save
      render json: @stocks, status: :accepted
    else
      render json: { errors: @stocks.errors.full_messages }, status: :unprocessible_entity
    end
  end

  private

  def stocks_params
    params.permit(:symbol, :name, :price, :volume, :category, :stock_id)
  end

  def find_stocks
    @stocks = Stock.find(params[:id])
  end
end
