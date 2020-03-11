
  Pod::Spec.new do |s|
    s.name = 'CapacitorStripeUi'
    s.version = '0.0.1'
    s.summary = 'Accept cards and Apple Pay / Google Pay with Strips native SDK's pre-built UI.'
    s.license = 'GNU GPLv3'
    s.homepage = 'https://github.com/w3cloud/capacitor-stripe-ui'
    s.author = 'Karthik Sankar'
    s.source = { :git => 'https://github.com/w3cloud/capacitor-stripe-ui', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end