var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = StatGeochemBase","category":"page"},{"location":"#StatGeochemBase","page":"Home","title":"StatGeochemBase","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for StatGeochemBase.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [StatGeochemBase]","category":"page"},{"location":"#StatGeochemBase.MSWD-Tuple{Any, Any}","page":"Home","title":"StatGeochemBase.MSWD","text":"MSWD(x, σ)\n\nReturn the Mean Square of Weighted Deviates (AKA the reduced chi-squared statistic) of a dataset with values x and one-sigma uncertainties σ\n\n\n\n\n\n","category":"method"},{"location":"#StatGeochemBase.arcdistance-NTuple{4, Any}","page":"Home","title":"StatGeochemBase.arcdistance","text":"arcdistance(latᵢ,lonᵢ,lat,lon)\n\nCalculate the distance on a sphere between the point (latᵢ,lonᵢ) and any number of points in (lat,lon). Latitude and Longitude should be specified in decimal degrees\n\n\n\n\n\n","category":"method"},{"location":"#StatGeochemBase.awmean-Tuple{Any, Any}","page":"Home","title":"StatGeochemBase.awmean","text":"(wx, wσ, mswd) = awmean(x, σ)\n\nWeighted mean, absent the geochonologist's MSWD correction to uncertainty.\n\n\n\n\n\n","category":"method"},{"location":"#StatGeochemBase.cntr-Tuple{AbstractArray}","page":"Home","title":"StatGeochemBase.cntr","text":"cntr(edges::AbstractArray)\n\nGiven an array of bin edges, return a corresponding vector of bin centers\n\n\n\n\n\n","category":"method"},{"location":"#StatGeochemBase.containsi-Tuple{AbstractString, Union{AbstractChar, AbstractString}}","page":"Home","title":"StatGeochemBase.containsi","text":"containsi(haystack, needle)\n\nConverts both haystack and needle to strings and checks whether string(haystack) contains string(needle), ignoring case.\n\n\n\n\n\n","category":"method"},{"location":"#StatGeochemBase.count_unique!-Tuple{Any}","page":"Home","title":"StatGeochemBase.count_unique!","text":"n = count_unique!(A)\n\nSort the array A in-place (if not already sorted), move unique elements to the front, and return the number of unique elements found.\n\nA[1:count_unique!(A)] should return an array equivalent to unique(A)\n\n\n\n\n\n","category":"method"},{"location":"#StatGeochemBase.draw_from_distribution!-Tuple{Array{<:AbstractFloat}, AbstractArray{<:AbstractFloat}}","page":"Home","title":"StatGeochemBase.draw_from_distribution!","text":"draw_from_distribution!(dist::AbstractArray{<:AbstractFloat}, x::Array{<:AbstractFloat})\n\nFill an existing variable x with random floating point numbers drawn from a continuous probability distribution specified by a vector dist defining the PDF curve thereof.\n\n\n\n\n\n","category":"method"},{"location":"#StatGeochemBase.draw_from_distribution-Tuple{AbstractArray{<:AbstractFloat}, Integer}","page":"Home","title":"StatGeochemBase.draw_from_distribution","text":"x = draw_from_distribution(dist::AbstractArray{<:AbstractFloat}, n::Integer)\n\nDraw n random floating point numbers from a continuous probability distribution specified by a vector dist defining the PDF curve thereof.\n\n\n\n\n\n","category":"method"},{"location":"#StatGeochemBase.fast_inv_sqrt-Tuple{Float64}","page":"Home","title":"StatGeochemBase.fast_inv_sqrt","text":"fast_inv_sqrt(x)\n\nThe infamous fast inverse square root of x, in 32 and 64 bit versions. Can be up to 10x faster than base 1/sqrt(x), though with nontrivial loss of precision. The implementations here are good to about 4 ppm.\n\n\n\n\n\n","category":"method"},{"location":"#StatGeochemBase.find_grid_inpolygon-NTuple{4, Any}","page":"Home","title":"StatGeochemBase.find_grid_inpolygon","text":"(columns, rows) = find_grid_inpolygon(grid_x, grid_y, poly_x, poly_y)\n\nFind the indexes of grid points that fall within a polygon for a grid with cell centers given by gridx (j-columns of grid) and gridy (i-rows of grid). Returns a list of rows and columns in the polygon\n\nExamples\n\n```julia julia> grid_x = -1.5:1/3:1.5;\n\njulia> grid_y = -1.5:1/3:1.5;\n\njulia> cols,rows = findgridinpolygon(gridx, gridy, [-.4,.4,.4,-.4],[.4,.4,-.4,-.4]) ([5, 5, 6, 6], [5, 6, 5, 6])\n\njulia> grid_x[cols] 4-element Vector{Float64}:  -0.16666666666666666  -0.16666666666666666   0.16666666666666666   0.16666666666666666\n\njulia> grid_y[rows] 4-element Vector{Float64}:  -0.16666666666666666   0.16666666666666666  -0.16666666666666666   0.16666666666666666\n\n\n\n\n\n","category":"method"},{"location":"#StatGeochemBase.findclosest-Tuple{Any, Any}","page":"Home","title":"StatGeochemBase.findclosest","text":"findclosest(source, target)\n\nReturn the index of the numerically closest value in the indexable collection target for each value in source. If muliple values are equally close, the first one is used\n\n\n\n\n\n","category":"method"},{"location":"#StatGeochemBase.findclosestabove-Tuple{Any, Any}","page":"Home","title":"StatGeochemBase.findclosestabove","text":"findclosestabove(source, target)\n\nReturn the index of the nearest value of the indexable collection target that is greater than (i.e., \"above\") each value in source. If no such values exist in target, returns an index of 0.\n\n\n\n\n\n","category":"method"},{"location":"#StatGeochemBase.findclosestbelow-Tuple{Any, Any}","page":"Home","title":"StatGeochemBase.findclosestbelow","text":"findclosestbelow(source, target)\n\nReturn the index of the nearest value of the indexable collection target that is less than (i.e., \"below\") each value in source. If no such target values exist in target, returns an index of 0.\n\n\n\n\n\n","category":"method"},{"location":"#StatGeochemBase.findmatches-Tuple{Any, Any}","page":"Home","title":"StatGeochemBase.findmatches","text":"findmatches(source, target)\n\nReturn the index of the first value in target (if any) that is equal to a given value in source for each value in source; else 0.\n\n\n\n\n\n","category":"method"},{"location":"#StatGeochemBase.findnth-Tuple{AbstractArray{Bool}, Integer}","page":"Home","title":"StatGeochemBase.findnth","text":"findnth(t::AbstractArray{Bool}, n::Integer)\n\nReturn the index of the nth true value of t, else length(t)\n\n\n\n\n\n","category":"method"},{"location":"#StatGeochemBase.gwmean-Tuple{Any, Any}","page":"Home","title":"StatGeochemBase.gwmean","text":"(wx, wσ, mswd) = gwmean(x, σ)\n\nGeochronologist's weighted mean, with \"MSWD correction\" to uncertainty, i.e., wσ is increased by a factor of sqrt(mswd)\n\n\n\n\n\n","category":"method"},{"location":"#StatGeochemBase.inpolygon-Tuple{Any, Any, Any}","page":"Home","title":"StatGeochemBase.inpolygon","text":"inpolygon(x,y,point)\n\nCheck if a 2D polygon defined by the arrays x, y contains a given point. Returns boolean (true or false)\n\nExamples\n\njulia> x = [0, 1, 1, 0];\n\njulia> y = [0, 0, 1, 1];\n\njulia> inpolygon(x, y, (0.5,0.5))\ntrue\n\njulia> inpolygon(x, y, (0.5,1.5))\nfalse\n\n\n\n\n\n","category":"method"},{"location":"#StatGeochemBase.linreg-Tuple{AbstractVector, AbstractVector}","page":"Home","title":"StatGeochemBase.linreg","text":"(a,b) = linreg(x::AbstractVector, y::AbstractVector)\n\nReturns the coefficients for a simple linear least-squares regression of the form y = a + bx\n\n\n\n\n\n","category":"method"},{"location":"#StatGeochemBase.linterp1-Tuple{AbstractArray, AbstractArray, Any}","page":"Home","title":"StatGeochemBase.linterp1","text":"yq = linterp1(x::AbstractArray, y::AbstractArray, xq; extrapolate=:Linear)\n\nSimple linear interpolation in one dimension. Given a vector of knots x and values y, find the corresponding y values at position(s) xq.\n\nKnots x must be sorted in increasing order.\n\nIf the optional keyword argument extrapolate is set to :Linear (default), xq values outside the range of x will be extrapolated using a linear extrapolation of the closest two x-y pairs. Otherwise, if extrapolate is set to a Number (e.g., 0, or NaN), that number will be used instead.\n\n\n\n\n\n","category":"method"},{"location":"#StatGeochemBase.linterp1s-Tuple{AbstractArray, AbstractArray, Any}","page":"Home","title":"StatGeochemBase.linterp1s","text":"yq = linterp1s(x::AbstractArray, y::AbstractArray, xq; extrapolate=:Linear)\n\nAs as linterp1 (simple linear interpolation in one dimension), but will sort the knots x and values y pairwise if x if not already sorted in increasing order.\n\n\n\n\n\n","category":"method"},{"location":"#StatGeochemBase.midpointquadrature-Tuple{AbstractRange, AbstractArray}","page":"Home","title":"StatGeochemBase.midpointquadrature","text":"midpointquadrature(bincenters, values)\n\nAdd up the area under a curve with y positions specified by a vector of values and x positions specfied by a vector of bincenters using midpoint integration.\n\n\n\n\n\n","category":"method"},{"location":"#StatGeochemBase.nearest-Union{Tuple{T}, Tuple{Type{T}, Any}} where T<:Number","page":"Home","title":"StatGeochemBase.nearest","text":"nearest(T, x)\n\nConvert x to the nearest representable value in type T, rounding if inexact\n\n\n\n\n\n","category":"method"},{"location":"#StatGeochemBase.norm_quantile-Tuple{Any}","page":"Home","title":"StatGeochemBase.norm_quantile","text":"norm_quantile(F::Number)\n\nHow far away from the mean (in units of sigma) should we expect proportion F of the samples to fall in a standard Gaussian (Normal[0,1]) distribution\n\n\n\n\n\n","category":"method"},{"location":"#StatGeochemBase.norm_width-Tuple{Any}","page":"Home","title":"StatGeochemBase.norm_width","text":"norm_width(N::Number)\n\nHow dispersed (in units of sigma) should we expect a sample of N numbers drawn from a standard Gaussian (Normal[0,1]) distribution to be?\n\n\n\n\n\n","category":"method"},{"location":"#StatGeochemBase.normcdf!-Tuple{Array, Number, Number, AbstractArray}","page":"Home","title":"StatGeochemBase.normcdf!","text":"normcdf!(result,mu,sigma,x)\n\nIn-place version of normcdf\n\n\n\n\n\n","category":"method"},{"location":"#StatGeochemBase.normcdf-Tuple{Any, Any, Any}","page":"Home","title":"StatGeochemBase.normcdf","text":"normcdf(mu,sigma,x)\n\nCumulative distribution function of the Normal (Gaussian) distribution\n\n12 + erf(\fracx-μσ2)2\n\nwith mean mu and standard deviation sigma, evaluated at x.\n\n\n\n\n\n","category":"method"},{"location":"#StatGeochemBase.normcdf_ll!-Tuple{AbstractArray}","page":"Home","title":"StatGeochemBase.normcdf_ll!","text":"normcdf_ll!(mu, sigma, x)\n\nFast log likelihood corresponding to the natural logarithm of the cumulative distribution function of a Normal (Gaussian) distribution with mean mu and standard deviation sigma, evaluated at x.\n\nAs normcdf_ll, but in-place (using x as a buffer).\n\n\n\n\n\n","category":"method"},{"location":"#StatGeochemBase.normcdf_ll-Tuple{Number}","page":"Home","title":"StatGeochemBase.normcdf_ll","text":"normcdf_ll(mu, sigma, x)\n\nFast log likelihood corresponding to the natural logarithm of the cumulative distribution function of a Normal (Gaussian) distribution with mean mu and standard deviation sigma, evaluated at x.\n\nIf x, [mu, and sigma] are given as arrays, the sum of the log likelihood over all x will be returned.\n\nSee also normcdf\n\n\n\n\n\n","category":"method"},{"location":"#StatGeochemBase.normpdf-Tuple{Any, Any, Any}","page":"Home","title":"StatGeochemBase.normpdf","text":"normpdf(mu,sigma,x)\n\nProbability density function of the Normal (Gaussian) distribution\n\nℯ^-(x-μ)^2  (2σ^2)  σ2π\n\nwith mean mu and standard deviation sigma, evaluated at x\n\n\n\n\n\n","category":"method"},{"location":"#StatGeochemBase.normpdf_ll-Tuple{Any, Any, Any}","page":"Home","title":"StatGeochemBase.normpdf_ll","text":"normpdf_ll(mu, sigma, x)\n\nFast log likelihood corresponding to the natural logarithm of the probability density function of a Normal (Gaussian) distribution with mean mu and standard deviation sigma, evaluated at x.\n\nIf x, [mu, and sigma] are given as arrays, the sum of the log likelihood over all x will be returned.\n\nSee also normpdf\n\n\n\n\n\n","category":"method"},{"location":"#StatGeochemBase.normproduct-NTuple{4, Any}","page":"Home","title":"StatGeochemBase.normproduct","text":"normproduct(μ1, σ1, μ2, σ2)\n\nThe integral of the product of two normal distributions N[μ1,σ1] * N[μ2,σ2]. This is itself just another Normal distribution! Specifically, one with variance σ1^2 + σ2^2, evaluated at distance |μ1-μ2| from the mean\n\n\n\n\n\n","category":"method"},{"location":"#StatGeochemBase.normproduct_ll-NTuple{4, Any}","page":"Home","title":"StatGeochemBase.normproduct_ll","text":"normproduct_ll(μ1, σ1, μ2, σ2)\n\nLog likelihood corresponding to the integral of N[μ1,σ1] * N[μ2,σ2] As normproduct, but using the fast log likelihood of a Normal distribution\n\n\n\n\n\n","category":"method"},{"location":"#StatGeochemBase.trapezoidalquadrature-Tuple{AbstractRange, AbstractArray}","page":"Home","title":"StatGeochemBase.trapezoidalquadrature","text":"trapezoidalquadrature(edges, values)\n\nAdd up the area under a curve with y positions specified by a vector of values and x positions specfied by a vector of edges using trapezoidal integration. Bins need not be evenly spaced, though it helps (integration will be faster if edges are specified as an AbstractRange).\n\n\n\n\n\n","category":"method"},{"location":"#StatGeochemBase.yorkfit-NTuple{4, Any}","page":"Home","title":"StatGeochemBase.yorkfit","text":"yorkfit(x, σx, y, σy)\n\nUses the York (1968) two-dimensional least-squares fit to calculate a, b, and uncertanties σa, σb for the equation y = a + bx, given x, y and uncertaintes σx, `σy.\n\n\n\n\n\n","category":"method"}]
}
