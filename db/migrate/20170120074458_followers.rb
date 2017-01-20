class Followers < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :followers

    add_column :users, :followed, :boolean, default: false
    add_column :users, :followers, :integer, default: 0
  end
end
