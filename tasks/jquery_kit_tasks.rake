namespace :jquery_kit do
  desc "Sync extra files from jquery-kit plugin"
  task :sync do
    system "rsync -ruv vendor/plugins/jquery-kit/public ."
  end
end
