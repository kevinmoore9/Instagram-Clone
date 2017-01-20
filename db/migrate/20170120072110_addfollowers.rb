class Addfollowers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :followers, :integer, array: true, default: []
  end
end
