USE GeoProject
GO

CREATE OR ALTER PROCEDURE sp_sap_insert_coordinates @longitude FLOAT, @latitude FLOAT
AS
BEGIN
	
    INSERT INTO _sap_coordinates (longitude, latitude) VALUES (@longitude, @latitude);
      
    /********************************* TEST UNITARIO*********************************
		
		EXEC sp_sap_insert_coordinates @longitude = '2.45' , @latitude = '22.55';
		SELECT * FROM _sap_coordinates

    *********************************************************************************/
END
go

-- /////////////////////////////////////
CREATE OR ALTER PROCEDURE sp_sap_get_coordinates_in_json
AS
BEGIN

    SELECT longitude, latitude FROM _sap_coordinates FOR JSON AUTO; 
   
    /********************************* TEST UNITARIO*********************************
		
		EXEC sp_sap_get_coordinates_in_json;

    *********************************************************************************/
END
go

-- /////////////////////////////////
CREATE OR ALTER PROCEDURE sp_sap_get_coordinates_in_xml
AS
BEGIN

    -- SELECT longitude, latitude, 2357 as 'idk' FROM _sap_coordinates FOR XML PATH;
	SELECT 
    (
        SELECT 
            CONCAT(latitude, ',', longitude,',', altitude, ',') AS [text()]
        FROM 
            _sap_coordinates
        ORDER BY 
            coordinates_id
        FOR XML PATH(''), TYPE
    ).value('.', 'NVARCHAR(MAX)') AS coordinates
	FOR XML PATH('coordinates')
   
    /********************************* TEST UNITARIO*********************************
		
		EXEC sp_sap_get_coordinates_in_xml;

    *********************************************************************************/
END
go

-- /////////////////////////////////////
CREATE OR ALTER PROCEDURE sp_sap_insert_logs
AS
BEGIN
	DECLARE @log_id VARCHAR(255) = NEWID();

    INSERT INTO _sap_logs (log_identifier,longitude,latitude,altitude,coordinate_created) SELECT @log_id,longitude, latitude,altitude, created FROM _sap_coordinates;
   
    /********************************* TEST UNITARIO*********************************
		
		EXEC sp_sap_insert_logs;
		SELECT * FROM _sap_logs;

    *********************************************************************************/
END
go

-- /////////////////////////////////////
CREATE OR ALTER PROCEDURE sp_sap_delete_coordinates
AS
BEGIN
	
	TRUNCATE TABLE _sap_coordinates;
   
    /********************************* TEST UNITARIO*********************************
		
		EXEC sp_sap_delete_coordinates;
		SELECT * FROM _sap_coordinates;

    *********************************************************************************/
END
go

/********************************* INSERT COORDIANTES FOR EXAMPLE *********************************
		
		INSERT INTO _sap_coordinates (latitude, longitude)
		VALUES
			(41.279566, 1.978710),
			(41.280496, 1.980189),
			(41.279715, 1.981541),
			(41.281438, 1.985129),
			(41.281527, 1.985373),
			(41.282079, 1.986530),
			(41.282463, 1.987186),
			(41.281878, 1.988058),
			(41.281959, 1.988593),
			(41.282312, 1.989066),
			(41.282299, 1.989159),
			(41.281982, 1.989565),
			(41.282031, 1.989785),
			(41.281788, 1.990110),
			(41.281775, 1.990297),
			(41.281958, 1.990571),
			(41.286354, 1.997185),
			(41.286480, 1.997466),
			(41.285099, 1.999320),
			(41.284983, 1.999965),
			(41.286488, 2.003970),
			(41.288904, 2.008418),
			(41.289437, 2.010563),
			(41.290138, 2.012311),
			(41.291177, 2.014562),
			(41.291527, 2.015229),
			(41.292107, 2.015944),
			(41.299227, 2.034222),
			(41.299631, 2.034961),
			(41.299812, 2.035909),
			(41.300610, 2.038497),
			(41.300670, 2.039277),
			(41.300791, 2.040515),
			(41.301250, 2.042436),
			(41.302004, 2.045225),
			(41.304679, 2.054790),
			(41.305331, 2.057474),
			(41.305452, 2.059701),
			(41.305452, 2.061019),
			(41.304721, 2.061396),
			(41.304897, 2.061573),
			(41.305989, 2.062449),
			(41.306201, 2.062650),
			(41.307994, 2.064073),
			(41.312939, 2.068060),
			(41.313277, 2.068469),
			(41.313609, 2.069112),
			(41.314593, 2.072520),
			(41.315118, 2.074353),
			(41.315860, 2.077021),
			(41.316766, 2.079674),
			(41.317442, 2.080775),
			(41.317937, 2.081627),
			(41.318492, 2.082632),
			(41.318692, 2.083001),
			(41.318843, 2.083234),
			(41.319084, 2.083564),
			(41.319395, 2.084058),
			(41.319507, 2.084429),
			(41.319518, 2.084690),
			(41.319530, 2.084686),
			(41.319498, 2.084947),
			(41.319495, 2.085159),
			(41.319477, 2.085320);

    **********************************************************************************************/




