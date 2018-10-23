class CreateStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks do |t|
      t.string :name
      t.integer :price
      t.string :symbol
      t.integer :volume
      t.string :category

      t.timestamps
    end
  end
end
