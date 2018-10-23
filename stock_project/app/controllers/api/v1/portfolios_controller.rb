class Api::V1::PortfoliosController < ApplicationController
  before_action :find_portfolios, only: [:update]
  def index
    @portfolios = Portfolio.all
    render json: @portfolios
  end

  def update
    @portfolios.update(portfolios_params)
    if @portfolios.save
      render json: @portfolios, status: :accepted
    else
      render json: { errors: @portfolios.errors.full_messages }, status: :unprocessible_entity
    end
  end

  private

  def portfolios_params
    params.permit(:symbol, :name)
  end

  def find_portfolios
    @portfolios = Portfolio.find(params[:id])
  end
end
