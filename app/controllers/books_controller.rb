class BooksController < ApplicationController
  before_action :set_book, only: [:show, :update, :destroy]
  # these are render a component (Single Page Application)
  def app
    render component: "App"
  end

  def index
    render json: Book.all
  end

  def show
    render json: @book
  end

  def create
    @book = Book.new(book_params)
    if(@book.save)
      render json: @book
    else
      render json: {errors: @book.errors.full_messages}, status: 422
    end
  end

  def update
    if(@book.update(book_params))
      render json: @book
    else
      render json: {errors: @book.errors.full_messages}, status: 422
    end
  end

  def destroy
    render json: @book.destroy
  end

  private

  def set_book
    @book = Book.find(params[:id])
  end

  def book_params
    params.require(:book).permit(:title, :author)
  end

end
