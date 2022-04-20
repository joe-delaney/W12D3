class RequireSeating < ActiveRecord::Migration[5.2]
  def change
    change_column_null :benches, :seating, false
  end
end
